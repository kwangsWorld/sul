package com.sul.app.product.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.common.PageVo;
import com.sul.app.product.dao.ProductDao;
import com.sul.app.product.vo.ProductVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {

	private final ProductDao dao;
	private final SqlSessionTemplate sst;

	//제품 전체 조회
	public List<ProductVo> listByEnrollDate(ProductVo vo) {
		return dao.listByEnrollDate(sst, vo);
	}
	
	public List<ProductVo> listByRating(ProductVo vo){
//		System.out.println("서비스 오나?");
		return dao.listByRating(sst, vo);
	}

	//제품 카테고리별 전체 조회
	public List<ProductVo> listByCategory(String str) {
		List<ProductVo> voList = dao.listByCategory(sst, str);
//		voList.forEach(System.out::println);
		return voList;
	}

	//제품 상세 조회
	public ProductVo detail(ProductVo vo) {
		return dao.detail(sst, vo);
	}

	// 제품 검색
	public List<ProductVo> search(PageVo vo) {
		return dao.search(sst, vo);
	}

	// 제품 전체 목록
	public List<ProductVo> searchAll(PageVo vo) {
		return dao.searchAll(sst, vo);
	}

	
}
