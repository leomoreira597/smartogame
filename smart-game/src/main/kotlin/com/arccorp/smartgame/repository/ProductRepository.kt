package com.arccorp.smartgame.repository

import com.arccorp.smartgame.models.ProductModel
import org.springframework.data.jpa.repository.JpaRepository

interface ProductRepository: JpaRepository<ProductModel, Int> {


    fun findByNameContaining(name: String): List<ProductModel>
}