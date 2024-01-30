package com.sul.app.delivery.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.common.PageVo;
import com.sul.app.delivery.vo.DeliveryVo;

@Repository
public class DeliveryDao {

	// 배송목록 조회 (한 페이지 리스트)
	public List<DeliveryVo> list(SqlSessionTemplate sqlSessionTemplate, PageVo vo) {
		return sqlSessionTemplate.selectList("DeliveryMapper.list", vo);
	}
	
	// 배송목록 조회 (전체 리스트)
	public List<DeliveryVo> listAll(SqlSessionTemplate sqlSessionTemplate, PageVo vo) {
		return sqlSessionTemplate.selectList("DeliveryMapper.listAll", vo);
	}

	// 배송목록 상세 조회
	public DeliveryVo detail(SqlSessionTemplate sqlSessionTemplate, DeliveryVo vo) {
		return sqlSessionTemplate.selectOne("DeliveryMapper.detail", vo);
	}

	// 배송상태 수정
	public int status(SqlSessionTemplate sqlSessionTemplate, DeliveryVo vo) {
		return sqlSessionTemplate.update("DeliveryMapper.status", vo);
	}

	// 배송추가
	public int add(SqlSessionTemplate sqlSessionTemplate, DeliveryVo vo) {
		return sqlSessionTemplate.insert("DeliveryMapper.add", vo);
	}

}
