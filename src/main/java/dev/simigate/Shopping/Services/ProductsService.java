package dev.simigate.Shopping.Services;

import dev.simigate.Shopping.Models.Product;
import dev.simigate.Shopping.Repositories.ProductRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductsService {
    @Autowired
    private ProductRepository productRepository;
    public List<Product> allProducts(){
        return productRepository.findAll();
    }
    public List<Product> postProducts( List<Product> products){
        return productRepository.saveAll(products);
    }
}
