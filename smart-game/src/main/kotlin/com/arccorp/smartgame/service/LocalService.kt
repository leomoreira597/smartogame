package com.arccorp.smartgame.service

import com.arccorp.smartgame.models.LocalModel
import com.arccorp.smartgame.repository.LocalRepository
import org.springframework.stereotype.Service

@Service
class LocalService(
    private val localRepository: LocalRepository
) {
    fun findLocalByProductId(id: Int): List<LocalModel> {
        return localRepository.findLocalByProductId(id)
    }
}