package com.sul.app.csboard.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.csboard.dao.CsBoardDao;
import com.sul.app.csboard.vo.CsBoardVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CsBoardService {
	
	private final CsBoardDao dao;
	private final SqlSessionTemplate sqlSessionTemplate;
	
	// 고객센터 목록 조회
	public List<CsBoardVo> list() {
		return dao.list(sqlSessionTemplate);
	}
	
	// 고객센터 상세 조회
	public CsBoardVo detail(String no) {
		return dao.detail(sqlSessionTemplate, no);
	}
	
	// 고객센터 질문 작성
	public int question(CsBoardVo vo) {
		return dao.question(sqlSessionTemplate, vo);
	}
	
	// 고객센터 답변 작성
	public int answer(CsBoardVo vo) {
		return dao.answer(sqlSessionTemplate, vo);
	}

}
