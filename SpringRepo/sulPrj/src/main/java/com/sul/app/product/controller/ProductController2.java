package com.sul.app.product.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sul.app.product.service.ProductService;
import com.sul.app.product.service.ProductService2;
import com.sul.app.product.vo.ProductVo;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("product")
@RequiredArgsConstructor
public class ProductController2 {
	
	private final ProductService2 service2;
	
	// 상품 목록 조회 (관리자)
	public List<ProductVo> adminList() {
		return service2.adminList();
	}
	
	// 상품 목록 상세조회 (관리자)
	public ProductVo adminDetail(String no) {
		return service2.adminDetail(no);
	}
	
	// 상품 등록 (관리자)
	public Map<String,String> adminInsert(ProductVo vo) {
		
		Map<String,String> map = new HashMap<String , String>();
		int result = service2.adminInsert(vo);
		
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");
		}
		return map;
	}
	
	// 상품 삭제 (관리자)
	public Map<String,String> adminDelete(String no) {
		
		Map<String,String> map = new HashMap<String , String>();
		int result = service2.adminDelete(no);
		
		if (result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");
		}
		return map;
	}
}
