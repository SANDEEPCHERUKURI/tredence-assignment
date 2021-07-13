package com.example.chartapi.springbootcharapidocker.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class ArealChartModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private int point;

    private String seriesName;

    private int cost;
}
