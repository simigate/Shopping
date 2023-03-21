package dev.simigate.Shopping.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="cartItems")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartItem {
    @Id
    private ObjectId objId;
    private int id;
    private String title;
    private String image;
    private float price;
    private String category;
    private int quantity;
}
