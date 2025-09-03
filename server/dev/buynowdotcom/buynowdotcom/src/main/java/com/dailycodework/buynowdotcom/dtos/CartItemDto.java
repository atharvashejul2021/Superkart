package com.dailycodework.buynowdotcom.dtos;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class CartItemDto {
    private Long id;
    private int quantity;
    private Double unitPrice;
    private ProductDto product;
}
