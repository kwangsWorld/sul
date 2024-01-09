package com.sul.app.delivery.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.delivery.dao.DeliveryDao;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DeliveryService {
	
	private final DeliveryDao dao;
	private final SqlSessionTemplate sqlSessionTemplate;

	// 배송목록 조회
	
	// 배송목록 상세 조회
	
	// 배송상태 수정
	
}
