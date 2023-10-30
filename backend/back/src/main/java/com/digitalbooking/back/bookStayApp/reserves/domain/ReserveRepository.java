package com.digitalbooking.back.bookStayApp.reserves.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReserveRepository extends JpaRepository<Reserve, Long> {
    List<Reserve> findByProductId(Long idProduct);
    List<Reserve> findByUserId(Long idUser);
}
