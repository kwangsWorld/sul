package com.sul.app.notice.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.sul.app.notice.vo.NoticeVo;

@Repository
public class NoticeDao {

	// 공지사항 목록 조회
	public List<NoticeVo> list(SqlSessionTemplate sqlSessionTemplate) {
		return sqlSessionTemplate.selectList("NoticeMapper.list");
	}
	
	// 공자시항 상세 조회
	public NoticeVo detail(SqlSessionTemplate sqlSessionTemplate, NoticeVo vo) {
		return sqlSessionTemplate.selectOne("NoticeMapper.detail" , vo);
	}
	
	// 조회수 증가
	public int increaseHit(SqlSessionTemplate sqlSessionTemplate, NoticeVo vo) {
		return sqlSessionTemplate.update("NoticeMapper.increaseHit", vo);
	}
}
