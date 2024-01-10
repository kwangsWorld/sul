package com.sul.app.product.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.product.dao.AdminProductDao;
import com.sul.app.product.vo.ProductVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminProductService {
	
	private final AdminProductDao dao;
	private final SqlSessionTemplate sqlSessionTemplate;

	// 상품 목록 조회 (관리자)
	public List<ProductVo> list() {
		return dao.list(sqlSessionTemplate);
	}
	
	// 상품 목록 상세조회 (관리자)
	public ProductVo detail(String no) {
		return dao.detail(sqlSessionTemplate, no);
	}
	
	// 상품 등록 (관리자)
	public int insert(ProductVo vo) {
		return dao.insert(sqlSessionTemplate, vo);
	}
	
	// 상품 삭제 (관리자)
	public int delete(String no) {
		return dao.delete(sqlSessionTemplate, no);
	}
	
	

}
