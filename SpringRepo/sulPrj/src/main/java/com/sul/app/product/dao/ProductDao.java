package com.sul.app.product.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.common.PageVo;
import com.sul.app.product.vo.ProductVo;

@Repository
public class ProductDao {

	//제품 전체 조회
	public List<ProductVo> listByEnrollDate(SqlSessionTemplate sst, ProductVo vo) {
		return sst.selectList("ProductMapper.listByEnrollDate", vo);
	}
	
	public List<ProductVo> listByRating(SqlSessionTemplate sst, ProductVo vo){
//		System.out.println("다오 오나?");
		List<ProductVo> voList = sst.selectList("ProductMapper.listByRating", vo);
//		System.out.println("다오 voList 값 : " + voList);
		return voList;
	}

	//제품 카테고리별 전체 조회
	public List<ProductVo> listByCategory(SqlSessionTemplate sst, String str) {
//		System.out.println("dao에서 str:" + str);
		List<ProductVo> voList = sst.selectList("ProductMapper.listByCategory", str);
//		System.out.println("여길안오네?");
		System.out.println(voList);
		return voList;
	}
	
	//제품 상세 조회
	public ProductVo detail(SqlSessionTemplate sst, ProductVo vo) {
		return sst.selectOne("ProductMapper.detail", vo);
	}

	// 제품 검색
	public List<ProductVo> search(SqlSessionTemplate sst, PageVo vo) {
		return sst.selectList("ProductMapper.search", vo);
	}
	// 제품 전체 목록
	public List<ProductVo> searchAll(SqlSessionTemplate sst, PageVo vo) {
		return sst.selectList("ProductMapper.searchAll", vo);
	}
	
}
