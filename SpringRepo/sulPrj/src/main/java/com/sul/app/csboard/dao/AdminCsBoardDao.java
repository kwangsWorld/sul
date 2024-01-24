package com.sul.app.csboard.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.common.PageVo;
import com.sul.app.csboard.vo.CsBoardVo;

@Repository
public class AdminCsBoardDao {
	
	// 고객센터 목록 조회 (한 페이지 리스트)
	public List<CsBoardVo> list(SqlSessionTemplate sqlSessionTemplate, PageVo vo) {
		return sqlSessionTemplate.selectList("AdminCsBoardMapper.list", vo);
	}
	
	// 고객센터 목록 조회 (전체 리스트)
	public List<CsBoardVo> listAll(SqlSessionTemplate sqlSessionTemplate, PageVo vo) {
		return sqlSessionTemplate.selectList("AdminCsBoardMapper.listAll", vo);
	}
	
	// 고객센터 상세 조회
	public CsBoardVo detail(SqlSessionTemplate sqlSessionTemplate , CsBoardVo vo) {
		return sqlSessionTemplate.selectOne("AdminCsBoardMapper.detail" , vo);
	}
	
	// 고객센터 답변 작성
	public int answer(SqlSessionTemplate sqlSessionTemplate , CsBoardVo vo) {
		return sqlSessionTemplate.update("AdminCsBoardMapper.answer" , vo);
	}

	
	
}
