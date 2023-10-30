package com.digitalbooking.back.bookStayApp.images.domain;

import com.digitalbooking.back.bookStayApp.products.domain.Product;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "IMAGE")

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IMAGE_ID")
    private Long id;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "IMAGE_URL", nullable = false)
    private String imageUrl;

    @JsonIgnore
    @ManyToOne (optional = false,
            cascade = CascadeType.ALL)
    @JoinColumn(name = "PRODUCT_ID")
    private Product product;

}
