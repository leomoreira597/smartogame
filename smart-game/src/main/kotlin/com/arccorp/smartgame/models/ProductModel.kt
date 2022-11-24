package com.arccorp.smartgame.models

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity(name = "products")
data class ProductModel(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Int? = null,

    @Column
    var name: String,

    @Column
    var description: String,

    @Column
    var image: String,

    @Column
    var price: Double,

    @Column
    var plataform: String
)
