# README

## About Letsy
Letsy is a  pixel-perfect clone of Etsy, an online community that allows users to sell and to buy handmade and vintage products. Users can create an account and a store to list their products for sale, as well as, they can search for products by title or description using the search bar. They can also add products to the sopping cart which shows the products' total count and total price, and allows users to updateb their shopping carts.


![alt text](https://github.com/mnashar/LetSee/blob/master/app/assets/images/screenShotIndex.png)


<br /> <br />

## Search Bar

![alt text](https://github.com/mnashar/LetSee/blob/master/app/assets/images/screenShotSearch.png)


<br /> <br />

## Shopping Cart 

![alt text](https://github.com/mnashar/LetSee/blob/master/app/assets/images/screenShotShoppingCart.png)


<br /> <br />

## Standardization
Standard code practices was maintained through out the coding process as well as data normalization, for example, state normalization was maintaine in the shopping cart state as shown below:
<br />
```javascript
const mapStateToProps = state => { 
    return ({
    userCartItems: Object.values(state.entities.cartItems),
    products: state.entities.products,
    currentUserId: state.session.id
})}

const mapDispatchToProps = dispatch => ({
    getAllCartItems: () => dispatch(getAllCartItems()),
    createCartItem: cartItem => dispatch(createCartItem(cartItem)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
    deletedCartItem: (id) => dispatch(deletedCartItem(id))
})
```
<br /> <br />

## Live
[Letsy](https://letsy.herokuapp.com)


## Technology
* Git
* Postgresql
* Ruby on Rails
* JBuilder
* React
* Redux
* Heroku
* Ruby version


