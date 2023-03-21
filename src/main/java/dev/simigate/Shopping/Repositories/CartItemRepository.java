package dev.simigate.Shopping.Repositories;

import dev.simigate.Shopping.Models.CartItem;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartItemRepository extends MongoRepository<CartItem, ObjectId> {
}
