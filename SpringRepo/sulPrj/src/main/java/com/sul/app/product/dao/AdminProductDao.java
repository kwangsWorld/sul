package com.sul.app.product.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.product.vo.ProductVo;

@Repository
public class AdminProductDao {

	// 상품 목록 조회 (관리자)
	public List<ProductVo> list(SqlSessionTemplate sqlSessionTemplate) {
		return sqlSessionTemplate.selectList("AdminProductMapper.list");
	}
	
	// 상품 목록 상세조회 (관리자)
	public ProductVo detail(SqlSessionTemplate sqlSessionTemplate , String no) {
		return sqlSessionTemplate.selectOne("AdminProductMapper.detail" , no);
	}
	
	// 상품 등록 (관리자)
	public int insert(SqlSessionTemplate sqlSessionTemplate , ProductVo vo) {
		return sqlSessionTemplate.insert("AdminProductMapper.insert" , vo);
	}
	
	// 상품 삭제 (관리자)
	public int delete(SqlSessionTemplate sqlSessionTemplate , String no) {
		return sqlSessionTemplate.update("AdminProductMapper.delete" , no);
	}

}
