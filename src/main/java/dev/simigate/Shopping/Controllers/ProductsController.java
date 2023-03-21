package dev.simigate.Shopping.Controllers;

import dev.simigate.Shopping.Models.Product;
import dev.simigate.Shopping.Services.ProductsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/products")
public class ProductsController {
    @Autowired
    private ProductsService productsService;
    @GetMapping
    public ResponseEntity<List<Product>> getProducts(){
        return new  ResponseEntity<List<Product>>(productsService.allProducts(), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<List<Product>> postAllProducts(@RequestBody List<Product> products){
        return new ResponseEntity<List<Product>>(productsService.postProducts(products),HttpStatus.OK);
    }
}
