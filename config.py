import os


class Config(object):
    # these are configuration settings

    SECRET_KEY = os.environ.get('SECRET_KEY') or 'my_secret_key'
    # allows for a fallback 