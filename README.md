# Bery Real Estate Project
# live link: https://assignment-12-bery.web.app/

## JP team requirement:
- I used Material UI in this project as JP team reaquirement
## Optional tasks that I have done:

- Implement Axios interceptor
- Implement a price based filtering system on “All properties page”.
- Use swiper.js for any slider.
- Use React hook form for any form related works.

# About Bery Real Estate Project:
This is a real estate project. There are 3 possible roles for a user who logged in to this site. A user can be "Regular User"/"Agent" or Admin.
There are some explanations of how it works (Features):
- An admin can make a regular user an agent or an admin from the dashboard'manage_users' route.
- An Agent can add new properties to sell from the Agent's dashboard 'addProperties' route.
- IF a User makes an offer for a property, that particular property will be shown in the agent's 'requested_properties' route.
- If the agent accepts the offer, a pay button will be shown at the user's dashboard 'property_bought' route. Users can pay for that property.
- After a payment, a transaction ID will be shown at the place of the Pay button mentioned earlier.
- There is a Search and sort field at All properties route.
- User will redirect to the login page if he/she hits any private route.
- If a user try to any of admin route, he/she will be logged out form the site and redirects to the login page.