package com.sul.app.product.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.product.vo.ProductVo;

@Repository
public class ProductDao2 {

	// 상품 목록 조회 (관리자)
	public List<ProductVo> adminList(SqlSessionTemplate sqlSessionTemplate) {
		return sqlSessionTemplate.selectList("ProductMapper.adminList");
	}
	
	// 상품 목록 상세조회 (관리자)
	public ProductVo adminDetail(SqlSessionTemplate sqlSessionTemplate , String no) {
		return sqlSessionTemplate.selectOne("ProductMapper.adminDetail" , no);
	}
	
	// 상품 등록 (관리자)
	public int adminInsert(SqlSessionTemplate sqlSessionTemplate , ProductVo vo) {
		return sqlSessionTemplate.insert("ProductMapper.adminInsert" , vo);
	}
	
	// 상품 삭제 (관리자)
	public int adminDelete(SqlSessionTemplate sqlSessionTemplate , String no) {
		return sqlSessionTemplate.update("ProductMapper.adminDelete" , no);
	}

}
