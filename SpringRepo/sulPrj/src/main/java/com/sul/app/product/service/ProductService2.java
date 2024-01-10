package com.sul.app.product.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.product.dao.ProductDao;
import com.sul.app.product.dao.ProductDao2;
import com.sul.app.product.vo.ProductVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService2 {
	
	private final ProductDao2 dao2;
	private final SqlSessionTemplate sqlSessionTemplate;

	// 상품 목록 조회 (관리자)
	public List<ProductVo> adminList() {
		return dao2.adminList(sqlSessionTemplate);
	}
	
	// 상품 목록 상세조회 (관리자)
	public ProductVo adminDetail(String no) {
		return dao2.adminDetail(sqlSessionTemplate, no);
	}
	
	// 상품 등록 (관리자)
	public int adminInsert(ProductVo vo) {
		return dao2.adminInsert(sqlSessionTemplate, vo);
	}
	
	// 상품 삭제 (관리자)
	public int adminDelete(String no) {
		return dao2.adminDelete(sqlSessionTemplate, no);
	}
	
	

}
