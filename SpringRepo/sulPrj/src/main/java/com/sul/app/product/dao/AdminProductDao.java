package com.sul.app.product.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.notice.vo.PageVo;
import com.sul.app.product.vo.ProductVo;

@Repository
public class AdminProductDao {

	// 상품 목록 조회 (한 페이지 리스트)
	public List<ProductVo> list(SqlSessionTemplate sqlSessionTemplate, PageVo vo) {
		return sqlSessionTemplate.selectList("AdminProductMapper.list", vo);
	}
	
	// 상품 목록 조회 (전체 리스트)
	public List<ProductVo> listAll(SqlSessionTemplate sqlSessionTemplate, PageVo vo) {
		return sqlSessionTemplate.selectList("AdminProductMapper.listAll", vo);
	}
	
	// 상품 목록 상세조회
	public ProductVo detail(SqlSessionTemplate sqlSessionTemplate , ProductVo vo) {
		return sqlSessionTemplate.selectOne("AdminProductMapper.detail" , vo);
	}
	
	// 상품 등록
	public int insert(SqlSessionTemplate sqlSessionTemplate , ProductVo vo) {
		return sqlSessionTemplate.insert("AdminProductMapper.insert" , vo);
	}
	
	// 상품 삭제
	public int delete(SqlSessionTemplate sqlSessionTemplate , ProductVo vo) {
		return sqlSessionTemplate.update("AdminProductMapper.delete" , vo);
	}

}
