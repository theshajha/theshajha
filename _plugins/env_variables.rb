# _plugins/env_variables.rb
require 'dotenv'
Dotenv.load

module Jekyll
  class EnvironmentVariablesGenerator < Generator
    def generate(site)
      site.config['firebase'] = {
        'apiKey' => ENV['FIREBASE_API_KEY'],
        'authDomain' => ENV['FIREBASE_AUTH_DOMAIN'],
        'projectId' => ENV['FIREBASE_PROJECT_ID'],
        'storageBucket' => ENV['FIREBASE_STORAGE_BUCKET'],
        'messagingSenderId' => ENV['FIREBASE_MESSAGING_SENDER_ID'],
        'appId' => ENV['FIREBASE_APP_ID'],
        'measurementId' => ENV['FIREBASE_MEASUREMENT_ID']
      }
    end
  end
end
