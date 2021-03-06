#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

import os
import re
import webapp2
from google.appengine.ext import db
from google.appengine.ext.webapp import template
from google.appengine.api import mail

def send_confirmation_email(email):
    message      = mail.EmailMessage(sender="ubiqua@ubiqua.me", subject="Gracias!")
    message.to   = email 
    message.bcc  = "ghurtado@ubiqua.me"
    message.html = template.render("info_email.html", {})
    message.body = template.render("info_email.txt", {})
    message.send()


class Lead(db.Model):
    email = db.EmailProperty(required=True)
    created_at = db.DateTimeProperty(auto_now_add=True)
   
    def is_valid(self):
        """Checks if email has @ and ."""
        return re.match("[^@]+@[^@]+\.[^@]+", self.email) is not None 

static_pages = {
    'team':   'team.html',
    'equipo': 'team.html'
}

class MainHandler(webapp2.RequestHandler):
    def get(self, page_name=None):
        template_html = static_pages.get(page_name, 'landingpage.html')
        path = os.path.join(os.path.dirname(__file__), (template_html))
        self.response.out.write(template.render(path, {}))

    def post(self):
        email = self.request.get("email").replace("%40", "@")
        new_lead = Lead(email=email)
        if new_lead.is_valid():
            new_lead.put() #Send email to admin
            send_confirmation_email(email)
            #Add lead to highrise

app = webapp2.WSGIApplication([
    ('/([a-z]+)', MainHandler),
    ('.*', MainHandler),
], debug=True)
