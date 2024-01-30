package com.sul.app.product.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sul.app.common.PageVo;
import com.sul.app.product.service.ProductService;
import com.sul.app.product.vo.ProductVo;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("product")
@RequiredArgsConstructor
@Slf4j
public class ProductController {
	
	private final ProductService service;

	//제품 전체 조회
	@GetMapping("listByEnrollDate")
	public List<ProductVo> listByEnrollDate(ProductVo vo){
		List<ProductVo> voList = service.listByEnrollDate(vo);
//		System.out.println("전체조회 오나?");
//		System.out.println(voList);
		return voList;
	}
	
	//제품 별점별 조회
	@GetMapping("listByRating")
	public List<ProductVo> listByRating(ProductVo vo){
		List<ProductVo> voList = service.listByRating(vo);
//		System.out.println("별점별 조회 컨트롤러 오나?");
//		System.out.println(voList);
		return voList;
	}
	
	//제품 카테고리 별 전체 조회
	@GetMapping("list/{str}")
	public List<ProductVo> listByCategory(@PathVariable (name = "str") String str){
		List<ProductVo> voList = service.listByCategory(str);
		return voList;
	}
	
	//제품 상세 조회
	@GetMapping("detail")
	public ProductVo detail(ProductVo vo) {
//		System.out.println("detail vo값 : " + vo);
		ProductVo productVo = service.detail(vo);
//		System.out.println("상세조회 vo: " + productVo);
		return productVo;
	}
	
	// 제품 검색
	@PostMapping("search")
	public Map<String,Object> search(@RequestBody PageVo vo) {
		Map<String,Object> map = new HashMap<String, Object>();
		
		int start = (Integer.parseInt(vo.getPageNo())-1)*Integer.parseInt(vo.getLimit());
		
		vo.setPageNo(Integer.toString(start));
		
		int pageTotal = (int)Math.ceil((double)service.searchAll(vo).size()/Integer.parseInt(vo.getLimit()));
		
		List<ProductVo> voList = service.search(vo);
		
		voList = service.search(vo);
		map.put("pageTotal", pageTotal);
		map.put("voList", voList);
		return map;
	}
}
