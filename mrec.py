#!/usr/bin/env python
# coding: utf-8

# In[1]:


# used for manipulating directory paths
import os

# Scientific and vector computation for python
import numpy as np

# Plotting library
from matplotlib import pyplot
import matplotlib as mpl

# Optimization module in scipy
from scipy import optimize

# will be used to load MATLAB mat datafile format
from scipy.io import loadmat, savemat

# library written for this exercise providing additional functions for assignment submission, and others
import utils

# In[2]:


def cofiCostFunc(params, Y, R, num_users, num_movies,
                 num_features, lambda_=0.0):

    # Unfold the U and W matrices from params
    X = params[:num_movies * num_features].reshape(num_movies, num_features)
    Theta = params[num_movies * num_features:].reshape(num_users, num_features)
    J = 0
    X_grad = np.zeros(X.shape)
    Theta_grad = np.zeros(Theta.shape)
    J = np.sum(((X@Theta.T - Y)**2) * R) / 2
    cost_reg = (lambda_ / 2) * (np.sum(Theta**2) + np.sum(X**2))
    J = J + cost_reg
    X_grad = ((X@Theta.T - Y) * R)@Theta + lambda_ * X
    Theta_grad = ((X@Theta.T - Y) * R).T@X + lambda_ * Theta

    grad = np.concatenate([X_grad.ravel(), Theta_grad.ravel()])
    return J, grad


# In[3]:


def loadData():
    data = loadmat(os.path.join('Data', 'ex8_movies.mat'))
    Y, R = data['Y'], data['R']
    print("Data loaded!")
    return Y, R


# In[4]:


def saveData(Y, R):
    data = {}
    data['Y'] = Y
    data['R'] = R
    savemat(os.path.join('Data', 'ex8_movies.mat'), data)
    print("Data saved!")


# In[5]:


def loadParams():
    data = loadmat(os.path.join('Data', 'ex8_movieParams.mat'))
    print("Parameters loaded!")
    return data['X'], data['Theta'], data['num_users'], data['num_movies'], data['num_features']


# In[6]:


def testParams():  # Test pre-trained weights (X, Theta, num_users, num_movies, num_features)

    X, Theta, num_users, num_movies, num_features = loadParams()
    Y, R = loadData()
    #  Reduce the data set size so that this runs faster
    num_users = 4
    num_movies = 5
    num_features = 3

    X = X[:num_movies, :num_features]
    Theta = Theta[:num_users, :num_features]
    Y = Y[:num_movies, 0:num_users]
    R = R[:num_movies, 0:num_users]

    #  Evaluate cost function
    J, _ = cofiCostFunc(np.concatenate([X.ravel(), Theta.ravel()]),
                        Y, R, num_users, num_movies, num_features)

    print('Cost at loaded parameters:  %.2f' % J)


# In[7]:




# In[8]:


def saveParams(X, Theta, num_users, num_movies, num_features):  # save paramneters to file
    data = {}
    data['X'] = X
    data['Theta'] = Theta
    data['num_users'] = num_users
    data['num_movies'] = num_movies
    data['num_features'] = num_features
    savemat(os.path.join('Data', 'ex8_movieParams.mat'), data)
    print("Parameters saved!")


# In[92]:


def predict(new_ratings, _id):
    Y, R = loadData()
    Y = np.hstack([Y, new_ratings[:, None]])
    R = np.hstack([R, (new_ratings[:, None] > 0)])
    print("Ratings added!")
    #  Normalize Ratings
    Ynorm, Ymean = utils.normalizeRatings(Y, R)

    #  Useful Values
    num_movies, num_users = Y.shape
    num_features = 10

    # Set Initial Parameters (Theta, X)
    X = np.random.randn(num_movies, num_features)
    Theta = np.random.randn(num_users, num_features)

    initial_parameters = np.concatenate([X.ravel(), Theta.ravel()])

    # Set options for scipy.optimize.minimize
    options = {'maxiter': 100}

    # Set Regularization
    lambda_ = 10
    res = optimize.minimize(lambda x: cofiCostFunc(x, Ynorm, R, num_users,
                                                   num_movies, num_features, lambda_),
                            initial_parameters,
                            method='TNC',
                            jac=True,
                            options=options)
    theta = res.x

    # Unfold the returned theta back into U and W
    X = theta[:num_movies * num_features].reshape(num_movies, num_features)
    Theta = theta[num_movies * num_features:].reshape(num_users, num_features)

    print('Recommender system learning completed.')

    p = np.dot(X, Theta.T)
    print(p.shape)
    my_predictions = p[:, _id] + Ymean

    movieList = utils.loadMovieList()

    ix = np.argsort(my_predictions)[::-1]
    return ix,my_predictions

# In[94]:
