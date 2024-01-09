package com.sul.app.product.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sul.app.product.service.ProductService;
import com.sul.app.product.vo.ProductVo;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("product")
@RequiredArgsConstructor
public class ProductController {
	
	private final ProductService service;

	//제품 전체 조회
	@GetMapping
	public List<ProductVo> list(ProductVo vo){
		List<ProductVo> voList = service.list(vo);
		return voList;
	}
	
	@GetMapping
	//제품 카테고리 별 전체 조회
	public List<ProductVo> listByCategory(ProductVo vo){
		List<ProductVo> voList = service.listByCategory(vo);
		return voList;
	}
	
	@GetMapping
	//제품 상세 조회
	public ProductVo detail(ProductVo vo) {
		ProductVo productVo = service.detail(vo);
		return productVo;
	}
}
