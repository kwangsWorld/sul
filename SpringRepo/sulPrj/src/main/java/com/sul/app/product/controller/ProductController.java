package com.sul.app.product.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sul.app.product.service.ProductService;
import com.sul.app.product.vo.ProductVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("product")
@RequiredArgsConstructor
public class ProductController {
	
	private final ProductService service;

	//제품 전체 조회
	@GetMapping("list")
	public List<ProductVo> list(ProductVo vo){
		System.out.println("되나?111");
		List<ProductVo> voList = service.list(vo);
		System.out.println("되나?222");
		return voList;
	}
	
	//제품 카테고리 별 전체 조회
	@GetMapping("list/{str}")
	public List<ProductVo> listByCategory(@PathVariable(name = "str") String str, ProductVo vo){
		List<ProductVo> voList = service.listByCategory(vo);
		return voList;
	}
	
	//제품 상세 조회
	@GetMapping("detail")
	public ProductVo detail(ProductVo vo) {
		ProductVo productVo = service.detail(vo);
		return productVo;
	}
	
	//제품 검색
	@GetMapping("search")
	public List<ProductVo> search(ProductVo vo) {
		List<ProductVo> voList = service.searchByName(vo);
		return voList;
	}
}
