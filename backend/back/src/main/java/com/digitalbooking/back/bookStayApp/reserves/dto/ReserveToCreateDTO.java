package com.digitalbooking.back.bookStayApp.reserves.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@NoArgsConstructor
public class ReserveToCreateDTO {
    private LocalTime startTime;
    private LocalDate checkIn;
    private LocalDate checkOut;
    private Long productId;

}
