function navbar(){
    return `
    <div id="top_nav">
    <div>
        <div><i class="fi fi-rs-mobile-button"></i><p> Save BIG with our app! </p><i class="fi fi-rr-angle-small-down"></i></div>
        <div> <p>Language </p><i class="fi fi-rr-angle-small-down"></i></div>
        <div><p>Support Centre</p><i class="fi fi-rr-angle-small-down"></i></div>
    </div>   
  </div>
  <div id="mid_nav">
       <div> <a href="#"><img src="https://content1.geekbuying.com/m/Content/images/headImg/geek_logo.png" alt="geek_logo"> </a></div>
       <div> <div><p>All Categories</p><button><i class="fi fi-rr-caret-down"></i></button> <input type="text" id="search_input" placeholder="Search by keywords"><button><i class="fi fi-bs-search"></i></button></div></div>
       <div>
        <div><p>Ship to</p><img src="https://cdn-icons-png.flaticon.com/512/206/206606.png" alt=""> <p>/INR</p><i class="fi fi-rr-angle-small-down"></i></div>
        <div><i class="fi fi-rs-user"></i><a href="#"><p>Sign in</p></a></div>
        <div><a href="#"><i class="fi fi-bs-shopping-cart"></i></a><p class="cart">0</p></div>
       </div>
  </div>
  <div id="down_nav">
    <div><i class="fi fi-rr-menu-burger"></i><p>Categories</p></div>
    <a href="new.html">New</a>
    <a href="#">Bestselling</a>
    <a href="#">Brand</a>
    <a href="#">Clearance</a>
    <a href="#">Deals</a>
    <a href="#">Coupon</a>
    <a href="#">App Only</a>
  </div>
    `
}

export default navbar