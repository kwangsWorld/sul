package com.sul.app.product.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sul.app.product.service.AdminProductService;
import com.sul.app.product.vo.ProductVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("adminProduct")
@RequiredArgsConstructor
public class AdminProductController {
	
	private final AdminProductService service;
	
	// 상품 목록 조회 (관리자)
	@GetMapping("list")
	public List<ProductVo> list() {
		return service.list();
	}
	
	// 상품 목록 상세조회 (관리자)
	@GetMapping("detail")
	public ProductVo detail(String no) {
		return service.detail(no);
	}
	
	// 상품 등록 (관리자)
	@PostMapping("insert")
	public Map<String,String> insert(ProductVo vo) {
		
		Map<String,String> map = new HashMap<String , String>();
		int result = service.insert(vo);
		
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");
		}
		return map;
	}
	
	// 상품 삭제 (관리자)
	@PostMapping("delete")
	public Map<String,String> delete(String no) {
		
		Map<String,String> map = new HashMap<String , String>();
		int result = service.delete(no);
		
		if (result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");
		}
		return map;
	}
}
