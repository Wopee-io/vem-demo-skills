```markdown
## Catalogue of End-to-End User Flows & User Stories

---

### 1. AUTH — Secure User Login

Swag Labs requires users to authenticate before accessing inventory or making purchases. Users enter a provided username and password, click "Login", and are directed to the product catalog if credentials are valid. Unsuccessful attempts yield an informative error, maintaining a safe and stateless test environment.

1. Load the Swag Labs landing page.
2. Enter a valid username.
3. Enter the shared password.
4. Click the "Login" button.
5. Land on the products listing page upon successful authentication.

  - **As a test user, I want to enter my credentials and authenticate so that I can access the inventory.**
    - The login form must validate username and password.
    - Successful authentication redirects to the main catalog.
    - Accepted usernames and passwords are clearly displayed on the page.

  - **As a test user, I want informative feedback on failed login so that I understand what went wrong.**
    - Invalid credentials display an error message.
    - Users remain on the login form after a failure.

---

### 2. INVENTORY — Product Listing & Browsing

After logging in, users view a clean, scrollable product catalog. Each product features an image, title, description, price, and an "Add to cart" button. Users can sort listings and select products to add to their cart, ensuring an intuitive browsing and shopping experience.

1. Authenticate and land on the products page.
2. Review available items, with options to sort by various criteria.
3. View product details (image, title, price).
4. Add desired products to the shopping cart.

  - **As a shopper, I want to see all available products so that I can decide what to buy.**
    - All products are displayed with images, descriptions, and prices.
    - Listings appear immediately after login.

  - **As a shopper, I want to sort the product list so that I can browse by price or name.**
    - The sort dropdown is always accessible.
    - Sorting updates the view with no page refresh required.

  - **As a shopper, I want to add a product to my cart so that I can purchase it later.**
    - Clicking the "Add to cart" button updates the cart icon.
    - The product stays in the cart until checkout or reset.

---

### 3. CART — Shopping Cart Access & Review

The persistent cart icon enables users to check the contents of their cart at any time. Upon clicking, users are taken to the cart summary page, where they can review chosen items and proceed to the next phase of the checkout workflow.

1. Add products to the cart from the inventory list.
2. Click the cart icon to view selected items.
3. Review items, quantities, and total value.

  - **As a shopper, I want to review my selected products so that I can confirm my intended purchases.**
    - The cart displays all added items with accurate counts and prices.
    - Users may proceed to checkout from this page.

  - **As a shopper, I want to see my cart update as I add items so that I know my actions were successful.**
    - The cart icon visually indicates the current number of items.

---

### 4. NAV — Menu Access & App Navigation

A sidebar menu provides quick links to inventory, about information, resetting the application state, and logging out. This ensures users can easily manage their session, restart tests, or visit company information with minimal steps.

1. Click the menu button to open the sidebar.
2. Access Inventory, About, Reset App State, or Logout.
3. Close the menu to return to the main view.

  - **As a test user, I want to log out easily so that I can end my session securely.**
    - Clicking "Logout" ends the session and redirects to the login page.

  - **As a test user, I want to reset the app state so that the cart and application return to the starting point.**
    - Reset removes all items from the cart and resets inventory views.

  - **As a user, I want to view company information via the About link so that I can learn more about the organization.**
    - About link opens the Sauce Labs information page in a new tab or window.

---

### 5. SOCIAL — Footer Social Channel Links

Footer links provide quick access to official Sauce Labs Twitter, Facebook, and LinkedIn profiles, enabling users to connect with the organization’s community, follow updates, or seek support.

1. From any page, scroll to the footer.
2. Click a social media link.
3. Be redirected to the respective official channel in a new tab.

  - **As a user, I want to visit Sauce Labs’ social channels so that I can follow or contact them externally.**
    - Footer must contain labeled, working links to Twitter, Facebook, and LinkedIn.
    - Each link opens the correct channel in a new browser tab.

---
```