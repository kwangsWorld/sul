package com.sul.app.csboard.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.csboard.vo.CsBoardVo;

@Repository
public class CsBoardDao {
	
	// 고객센터 목록 조회
	public List<CsBoardVo> list(SqlSessionTemplate sqlSessionTemplate) {
		return sqlSessionTemplate.selectList("CsBoardVo.list");
	}
	
	// 고객센터 상세 조회
	public CsBoardVo detail(SqlSessionTemplate sqlSessionTemplate , String no) {
		return sqlSessionTemplate.selectOne("CsBoardVo.detail" , no);
	}
	
	// 고객센터 질문 작성
	public int question(SqlSessionTemplate sqlSessionTemplate , CsBoardVo vo) {
		return sqlSessionTemplate.insert("CsBoadVo.question" , vo);
	}
	
	// 고객센터 답변 작성
	public int answer(SqlSessionTemplate sqlSessionTemplate , CsBoardVo vo) {
		return sqlSessionTemplate.update("CsBoardVo.answer" , vo);
				
	}
	
}
