package com.sul.app.delivery.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.delivery.dao.DeliveryDao;
import com.sul.app.delivery.vo.DeliveryVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DeliveryService {
	
	private final DeliveryDao dao;
	private final SqlSessionTemplate sqlSessionTemplate;

	// 배송목록 조회
	public List<DeliveryVo> list() {
		return dao.list(sqlSessionTemplate);
	}
	
	// 배송목록 상세 조회
	public DeliveryVo detail(String no) {
		return dao.detail(sqlSessionTemplate, no);
	}
	
	// 배송상태 수정
	public int status(DeliveryVo vo) {
		return dao.status(sqlSessionTemplate, vo);
	}
	
}
