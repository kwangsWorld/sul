package com.sul.app.product.controller;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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
	public ProductVo detail(ProductVo vo) {
		return service.detail(vo);
	}
	
	// 상품 등록 (관리자)
	@PostMapping("insert")
	public Map<String,String> insert(@RequestBody ProductVo vo , MultipartFile f) throws Exception {
		
		String fullPath = saveFile(f);
		vo.setImage(fullPath);
		
		int result = service.insert(vo);
		
		Map<String,String> map = new HashMap<String , String>();
		if(result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");
		}
		return map;
	}
	
	// 상품 이미지 등록
	private String saveFile(MultipartFile f) throws Exception {
		String path = "C:\\dev\\sulRepo\\sulPrj\\src\\main\\webapp\\resources\\upload\\gallery\\img\\";
		String originName = f.getOriginalFilename();
		
		File target = new File(path + originName);
		
		System.out.println(target.getAbsolutePath());
		
		f.transferTo(target);
		
		return path + originName;
	}
	
	
	// 상품 삭제 (관리자)
	@PostMapping("delete")
	public Map<String,String> delete(@RequestBody ProductVo vo) {
		
		Map<String,String> map = new HashMap<String , String>();
		int result = service.delete(vo);
		
		if (result == 1) {
			map.put("msg", "good");
		}else {
			map.put("msg", "bad");
		}
		return map;
	}
}
