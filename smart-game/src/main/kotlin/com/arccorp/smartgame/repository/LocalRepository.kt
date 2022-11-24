package com.arccorp.smartgame.repository

import com.arccorp.smartgame.models.LocalModel
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query

interface LocalRepository: JpaRepository<LocalModel, Int> {

    @Query(
        value = "SELECT * FROM locals WHERE id_products = ?1",
        nativeQuery = true
    )
    fun findLocalByProductId(id: Int): List<LocalModel>
}