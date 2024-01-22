package com.sul.app.product.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.notice.vo.PageVo;
import com.sul.app.product.dao.AdminProductDao;
import com.sul.app.product.vo.ProductVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminProductService {
	
	private final AdminProductDao dao;
	private final SqlSessionTemplate sqlSessionTemplate;

	// 상품 목록 조회 (한 페이지 리스트)
	public List<ProductVo> list(PageVo vo) {
		return dao.list(sqlSessionTemplate, vo);
	}
	
	// 상품 목록 조회 (전체 리스트)
	public List<ProductVo> listAll(PageVo vo) {
		return dao.listAll(sqlSessionTemplate, vo);
	}
	
	// 상품 목록 상세조회
	public ProductVo detail(ProductVo vo) {
		return dao.detail(sqlSessionTemplate, vo);
	}
	
	// 상품 등록
	public int insert(ProductVo vo) {
		
		String str = vo.getImage().replace("C:\\sulRepo\\SpringRepo\\sulPrj\\src\\main\\webapp", "http://127.0.0.1:8888/app");
		vo.setImage(str);
		
		return dao.insert(sqlSessionTemplate, vo);
	}
	
	// 상품 삭제
	public int delete(ProductVo vo) {
		return dao.delete(sqlSessionTemplate, vo);
	}
	
	

}
