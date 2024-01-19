package com.sul.app.community.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.sul.app.community.dao.CommunityDao;
import com.sul.app.community.vo.CommunityVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CommunityService {

	private final CommunityDao dao;
	private final SqlSessionTemplate sst;
	
	//작성하기
	public int insert(CommunityVo vo) {
		String str = vo.getImg().replace("C:\\sulRepo\\SpringRepo\\sulPrj\\src\\main\\webapp", "http://127.0.0.1:8888/app");
		vo.setImg(str);
		
		return dao.insert(sst, vo);
	}

	//목록
	public List<CommunityVo> list() {
		return dao.list(sst);
	}

	//상세조회
		public List<CommunityVo> detail() {
			return dao.detail(sst);
		}

	//수정
	public int edit(CommunityVo vo) {
		return dao.edit(sst, vo);
	}

	//삭제
	public int delete(CommunityVo vo) {
		return dao.delete(sst, vo);
	}

	//내가 작성한 글보기
	public List<CommunityVo> my(CommunityVo vo) {
		return dao.my(sst, vo);
	}

	

	

}