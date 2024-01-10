package com.sul.app.delivery.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.delivery.vo.DeliveryVo;

@Repository
public class DeliveryDao {

	// 배송목록 조회
	public List<DeliveryVo> list(SqlSessionTemplate sqlSessionTemplate) {
		return sqlSessionTemplate.selectList("DeliveryMapper.list");
	}
	
	// 배송목록 상세 조회
	public DeliveryVo detail(SqlSessionTemplate sqlSessionTemplate, String no) {
		return sqlSessionTemplate.selectOne("DeliveryMapper.detail" , no);
	}
	
	// 배송상태 수정
	public int status(SqlSessionTemplate sqlSessionTemplate, DeliveryVo vo) {
		return sqlSessionTemplate.update("DeliveryMapper.status" , vo);
	}
	
}
