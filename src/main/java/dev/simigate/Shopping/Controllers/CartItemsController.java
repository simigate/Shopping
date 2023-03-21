package dev.simigate.Shopping.Controllers;

import dev.simigate.Shopping.Services.CartItemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/cartItems")
public class CartItemsController {
    @Autowired
    private CartItemsService cartItemsService;
    @PostMapping
    public ResponseEntity<String> postCartItems(){
//        return new ResponseEntity(cartItemsService.postCart(),http.ok)
        return new ResponseEntity<String>("posted cart", HttpStatus.CREATED);

    }


}
