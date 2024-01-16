package com.sul.app.product.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.product.dao.ProductDao;
import com.sul.app.product.vo.ProductVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {

	private final ProductDao dao;
	private final SqlSessionTemplate sst;

	//제품 전체 조회
	public List<ProductVo> list(ProductVo vo) {
		
		return dao.list(sst, vo);
		
	}

	//제품 카테고리별 전체 조회
	public List<ProductVo> listByCategory(String str) {
		List<ProductVo> a = dao.listByCategory(sst, str);
		a.forEach(System.out::println);
		return a;
	}

	//제품 상세 조회
	public ProductVo detail(ProductVo vo) {
		return dao.detail(sst, vo);
	}

	//제품 검색
	public List<ProductVo> searchByName(ProductVo vo) {
		return dao.searchByName(sst, vo);
	}

}
