package com.sul.app.product.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.product.vo.ProductVo;

@Repository
public class ProductDao {

	//제품 전체 조회
	public List<ProductVo> list(SqlSessionTemplate sst, ProductVo vo) {
		return sst.selectList("ProductMapper.list", vo);
	}

	//제품 카테고리별 전체 조회
	public List<ProductVo> listByCategory(SqlSessionTemplate sst, String str) {
		return sst.selectList("ProductMapper.listByCategory", str);
	}
	
	//제품 상세 조회
	public ProductVo detail(SqlSessionTemplate sst, ProductVo vo) {
		return sst.selectOne("ProductMapper.detail", vo);
	}

	//제품 검색
	public List<ProductVo> searchByName(SqlSessionTemplate sst, ProductVo vo) {
		return sst.selectList("ProductMapper.search", vo);
	}

}
