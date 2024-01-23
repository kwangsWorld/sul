package com.sul.app.csboard.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.csboard.vo.CsBoardVo;
import com.sul.app.notice.vo.PageVo;

@Repository
public class CsBoardDao {
	
	// 고객센터 목록 조회 (한 페이지 리스트)
	public List<CsBoardVo> list(SqlSessionTemplate sqlSessionTemplate, PageVo vo) {
		return sqlSessionTemplate.selectList("CsBoardMapper.list", vo);
	}
	
	// 고객센터 목록 조회 (전체 리스트)
	public List<CsBoardVo> listAll(SqlSessionTemplate sqlSessionTemplate, PageVo vo) {
		return sqlSessionTemplate.selectList("CsBoardMapper.listAll", vo);
	}
	
	// 고객센터 상세 조회
	public CsBoardVo detail(SqlSessionTemplate sqlSessionTemplate , CsBoardVo vo) {
		return sqlSessionTemplate.selectOne("CsBoardMapper.detail" , vo);
	}
	
	// 고객센터 질문 작성
	public int question(SqlSessionTemplate sqlSessionTemplate , CsBoardVo vo) {
		return sqlSessionTemplate.insert("CsBoardMapper.question" , vo);
	}
	
}
