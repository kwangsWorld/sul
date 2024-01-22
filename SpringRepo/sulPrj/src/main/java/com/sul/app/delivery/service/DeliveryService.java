package com.sul.app.delivery.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.delivery.dao.DeliveryDao;
import com.sul.app.delivery.vo.DeliveryVo;
import com.sul.app.notice.vo.PageVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DeliveryService {
	
	private final DeliveryDao dao;
	private final SqlSessionTemplate sqlSessionTemplate;

	// 배송목록 조회 (한 페이지 리스트)
	public List<DeliveryVo> list(PageVo vo) {
		return dao.list(sqlSessionTemplate, vo);
	}
	
	// 배송목록 조회 (전체 리스트)
	public List<DeliveryVo> listAll(PageVo vo) {
		return dao.listAll(sqlSessionTemplate, vo);
	}
	
	// 배송목록 상세 조회
	public DeliveryVo detail(DeliveryVo vo) {
		return dao.detail(sqlSessionTemplate, vo);
	}
	
	// 배송상태 수정
	public int status(DeliveryVo vo) {
		return dao.status(sqlSessionTemplate, vo);
	}
	
}
