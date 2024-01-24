package com.sul.app.csboard.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.common.PageVo;
import com.sul.app.csboard.dao.CsBoardDao;
import com.sul.app.csboard.vo.CsBoardVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CsBoardService {
	
	private final CsBoardDao dao;
	private final SqlSessionTemplate sqlSessionTemplate;
	
	// 고객센터 목록 조회 (한 페이지 리스트)
	public List<CsBoardVo> list(PageVo vo) {
		return dao.list(sqlSessionTemplate, vo);
	}
	
	// 고객센터 목록 조회 (전체 리스트)
	public List<CsBoardVo> listAll(PageVo vo) {
		return dao.listAll(sqlSessionTemplate, vo);
	}
	
	// 고객센터 상세 조회
	public CsBoardVo detail(CsBoardVo vo) {
		return dao.detail(sqlSessionTemplate, vo);
	}
	
	// 고객센터 질문 작성
	public int question(CsBoardVo vo) {
		
		String str = vo.getQImg().replace("C:\\sulRepo\\SpringRepo\\sulPrj\\src\\main\\webapp", "http://127.0.0.1:8888/app");
		vo.setQImg(str);
		
		return dao.question(sqlSessionTemplate, vo);
	}
	
}
