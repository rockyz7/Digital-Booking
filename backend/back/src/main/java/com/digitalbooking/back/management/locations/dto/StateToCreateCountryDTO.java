package com.digitalbooking.back.management.locations.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StateToCreateCountryDTO {

    private String name;
    private Set<CityToCreateCountryDTO> cities;
}
