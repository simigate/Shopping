package dev.simigate.Shopping.Services;

import dev.simigate.Shopping.Models.CartItem;
import dev.simigate.Shopping.Repositories.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartItemsService {
    @Autowired
    private CartItemRepository cartItemRepository;
//            public <CartItem> postItem(){
//                return cartItemRepository.insert(< CartItem >)
//            }

}
