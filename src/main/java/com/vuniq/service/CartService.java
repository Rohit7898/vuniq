package com.vuniq.service;

import com.vuniq.model.Cart;
import com.vuniq.model.CartItem;
import com.vuniq.repository.CartItemRepository;
import com.vuniq.repository.CartRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartService {

    private final CartRepository cartRepository;

    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public Optional<Cart> getActiveCartByUserId(Long userId) {
        return cartRepository.findByUserIdAndCheckedOutFalse(userId);
    }
}
